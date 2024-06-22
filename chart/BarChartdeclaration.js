import React, { useEffect, useState, useRef } from 'react';
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

const BarChartdeclaration = () => {
  const [declarations, setDeclarations] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    DeclarationService.getAllEmployees()
      .then((response) => {
        setDeclarations(response.data);

        // Prepare the data for the first chart
        const chartData = response.data.map((declaration) => ({
          name: declaration.subject,
          y: declaration.id,
          type: declaration.type,
        }));
        setChartData(chartData);

        // Prepare the data for the second chart
        const chartData2 = response.data.map((declaration) => ({
          name: declaration.type,
          y: declaration.id,
          type: declaration.type,
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
          type: 'column', // specify the chart type as column
          color: tokens(theme.palette.mode).grey[100],
        },
        {
          name: 'Type',
          data: updatedChartData2.map((dataPoint) => dataPoint.typeValue), // use the updatedChartData2
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
        categories: chartData.map((dataPoint) => dataPoint.type),
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
          type: 'column', // specify the chart type as column
          color: tokens(theme.palette.mode).grey[100],
        },
        {
          name: 'Type',
          data: updatedChartData2.map((dataPoint) => dataPoint.typeValue), // use the updatedChartData2
          type: 'line', // specify the chart type as line
          color: 'red', // specify the color as red
        },
      ],
    };

    // ...

    domtoimage
      .toPng(chartRef.current)
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
  const typeMapping = {
    type1: 1,
    type2: 2,
    type3: 3,
    // Add more types if needed
  };

  const updatedChartData2 = chartData.map((dataPoint) => ({
    ...dataPoint,
    typeValue: typeMapping[dataPoint.type],
  }));

  return (
    <div>
      <Box m="20px">
        <Header title="Bar Chart Declaration " subtitle="Declaration Employees Chart" />
        <IconButton onClick={handleExportChart} style={{ color: '#4cceac', marginLeft: '1500px' }}>
          <GetAppIcon />
        </IconButton>
        <div ref={chartRef}>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              chart: {
                type: 'column',
                backgroundColor: darkMode ? '#333' : 'transparent',
              },
              title: {
                text: 'Declaration Data',
                style: {
                  color: colors.grey[100],
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
                  data: chartData.map((dataPoint) => dataPoint.y),
                  type: 'column', // specify the chart type as column
                  color: '#ff9933',
                },
                {
                  name: 'Type',
                  data: updatedChartData2.map((dataPoint) => dataPoint.typeValue), // use the updatedChartData2
                  type: 'line', // specify the chart type as line
                  color: 'red', // specify the color as red
                },
              ],
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default BarChartdeclaration;
