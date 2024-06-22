import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import domtoimage from 'dom-to-image';
import EmployeeService from './../services/EmployeeService';
import GetAppIcon from '@material-ui/icons/GetApp';
import { IconButton } from '@material-ui/core';
import { tokens } from "./../theme";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import Header from "./../componentss/Header";
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month.toString().padStart(2, '0')}/${year}`;
};
const Datagrapheemployee = () => {
  const [employees, setEmployees] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);

        // Prepare the data for the first chart
        const chartData = response.data.map((employee) => ({
          name: employee.model,
          y: employee.id,
          type: employee.type,
        }));
        setChartData(chartData);

        // Prepare the data for the second chart
        // Prepare the data for the second chart

        const chartData2 = response.data.map((employee) => ({
          name: employee.datdacquis,
          y: employee.id,
          type: employee.type,
        }));

        setChartData2(chartData2);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handleExportChart = () => {
    const chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Employee Data',
      },
      xAxis: {
        categories: chartData.map((dataPoint) => dataPoint.name),
      },
      yAxis: {
        title: {
          text: 'Employee ID',
        },
      },
      series: [
        {
          name: 'Employee ID',
          data: chartData.map((dataPoint) => dataPoint.y),
        },
        {
          name: 'Type',
          data: chartData.map((dataPoint) => dataPoint.type),
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
        categories: chartData2.map((dataPoint) => dataPoint.name),
        
      },
      yAxis: {
        title: {
          text: 'Date Daquis',
        },
      },
      series: [
        {
          name: 'Date Daquis',
          data: chartData2.map((dataPoint) => dataPoint.y),
        },
        {
          name: 'Type',
          data: chartData2.map((dataPoint) => dataPoint.type),
          type: 'line', // Add this line to include the "type" as a line
        },
      ],
      
      
    };

    const chartContainer = document.getElementById('chart-container');

    domtoimage.toPng(chartContainer).then(function (dataUrl) {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'chart.png';
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(function (error) {
      console.error('Error exporting chart:', error);
    });
  };
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const typeMapping = {
    'type1': 1,
    'type2': 2,
    'type3': 3,
    // Add more types if needed
  };
  const updatedChartData2 = chartData2.map((dataPoint) => ({
    ...dataPoint,
    typeValue: typeMapping[dataPoint.type],
  }));
    

  return (
    <Box m="20px">
    <Header title="Bar Materiel Chart " subtitle="Materiel Employees Chart" />
    <Box >
    

    
        <IconButton onClick={handleExportChart} style={{color:'#4cceac',marginLeft:'1500px'}}>
          <GetAppIcon />
        </IconButton>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: 'column',
              backgroundColor: darkMode ? '#333' : 'transparent',
            },
            title: {
              text: 'Employee Data',
              style: {
                color:  colors.grey[100],
              },
            },
            xAxis: {
              categories: chartData.map((dataPoint) => dataPoint.name),
              labels: {
                style: {
                  color: colors.grey[100],
                },
              },
            },
            yAxis: {
              title: {
                text: 'Employee ID',
              },
              labels: {
                style: {
                  color: colors.grey[100],
                },
              },
            },
            series: [
              {
                name: 'Employee ID',
                data: chartData.map((dataPoint) => dataPoint.y),
                style: {
                  color:  colors.grey[100],
                },
              },
              {
                name: 'Type',
                data: chartData.map((dataPoint) => dataPoint.type),
                style: {
                  color:  colors.grey[100],
                },
              },
              
            ],
          }}
        />







   
    </Box>
      </Box>
  );
};

export default Datagrapheemployee;
