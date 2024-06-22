import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import domtoimage from 'dom-to-image';
import EmployeeService from './../services/EmployeeService';
import GetAppIcon from '@material-ui/icons/GetApp';
import { IconButton } from '@material-ui/core';
import { tokens } from './../theme';
import { useTheme } from "@mui/material";
import DeclarationService from '../declaration/DeclarationService';
import { Box } from "@mui/material";
import Header from "./../componentss/Header";

const Datagraphdeclarations = () => {
    const [declarations, setDeclarations] = useState([]);
    const [chartData4, setChartData4] = useState([]);
    const [chartData3, setChartData3] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [lightMode, setLightMode] = useState(false);
  
    useEffect(() => {
        DeclarationService.getAllEmployees()
          .then((response) => {
            setDeclarations(response.data);
      
            // Prepare the data for the first chart
            const chartData3 = response.data.map((declaration) => ({
              name: declaration.subject,
              y: declaration.id,
              type: declaration.type,
            }));
            setChartData3(chartData3);
      
            // Prepare the data for the second chart
            const chartData4 = response.data.map((declaration) => ({
              name: declaration.type,
              y: declaration.id,
              type: declaration.type,
            }));
            setChartData4(chartData4);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      
        
       
  
      const handleExportChart2 = () => {
        const chartOptions = {
          chart: {
            type: 'column',
          },
          title: {
            text: 'Employee Data',
          },
          xAxis: {
            categories: chartData3.map((dataPoint) => dataPoint.name),
          },
          yAxis: {
            title: {
              text: 'Employee ID',
            },
          },
          series: [
            {
              name: 'Employee ID',
              data: chartData3.map((dataPoint) => dataPoint.y),
              type: 'column', // specify the chart type as column
              color: colors.grey[100],
            },
            {
              name: 'Type',
              data: updatedChartData3.map((dataPoint) => dataPoint.typeValue), // use the updatedChartData2
              type: 'line', // specify the chart type as line
              color: 'red', // specify the color as red
            },
          ],
        };
      const chartOptions2 = {
        chart: {
          type: 'column',
        },
        title: {
          text: 'Employee Data',
        },
        xAxis: {
          categories: chartData3.map((dataPoint) => dataPoint.type),
        },
        yAxis: {
          title: {
            text: 'Employee ID',
          },
        },
        series: [
            {
              name: 'Employee ID',
              data: chartData3.map((dataPoint) => dataPoint.y),
              type: 'column', // specify the chart type as column
              color: colors.grey[100],
            },
            {
              name: 'Type',
              data: updatedChartData3.map((dataPoint) => dataPoint.typeValue), // use the updatedChartData2
              type: 'line', // specify the chart type as line
              color: 'red', // specify the color as red
            },
          ],
          
          
      };
  
      // ...
  
      const chartContainer = document.getElementById('chart-container');

      domtoimage
        .toPng(chartContainer)
        .then(function (dataUrl) {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'chart.png';
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(function (error) {
          console.error('Error exporting chart:', error);
        });
    };
  
  
    const handleDarkModeToggle = () => {
      setDarkMode(!darkMode);
    };
  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const typeMapping2 = {
      type1: 1,
      type2: 2,
      type3: 3,
      // Add more types if needed
    };
  
    const updatedChartData3 = chartData3.map((dataPoint) => ({
      ...dataPoint,
      typeValue: typeMapping2[dataPoint.type],
    }));
    return (
        <div>
         <Box m="20px">
      <Header title="line Chart Declaration" subtitle="Declaration Employees Chart" />
         <IconButton onClick={handleExportChart2} style={{color:'#4cceac',marginLeft:'1500px'}}>
            <GetAppIcon />
          </IconButton>
          <div id="chart-container" >
         
  
  
  <HighchartsReact
            highcharts={Highcharts}
            options={{
              chart: {
                type: 'line',
                backgroundColor: darkMode ? '#333' : 'transparent',
              },
              title: {
                text: 'Declaration Data',
                style: {
                  color: colors.grey[100],
                },
              },
              xAxis: {
                categories: chartData3.map((dataPoint) => dataPoint.type),
                labels: {
                  style: {
                    color: colors.grey[100],
                  },
                },
              },
              yAxis: {
                title: {
                  text: 'Declaration ID',
                },
                labels: {
                  style: {
                    color: colors.grey[100],
                  },
                },
              },
              series: [
                  {
                    name: 'Declaration ID',
                    data: chartData3.map((dataPoint) => dataPoint.y),
                    type: 'line', // specify the chart type as column
                    color:'#ff9933' ,   lineWidth: 3, 
                  },
                  {
                    name: 'Type',
                    data: updatedChartData3.map((dataPoint) => dataPoint.typeValue), // use the updatedChartData2
                    type: 'line', // specify the chart type as line
                    color: 'red', // specify the color as red
                    lineWidth: 3,
                  },
                ],
                
                
            }}
          />
          </div>
          </Box>
        </div>
       
      );
}

export default Datagraphdeclarations