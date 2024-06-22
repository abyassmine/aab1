import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import domtoimage from 'dom-to-image';
import EmployeeService from './../services/EmployeeService';
import GetAppIcon from '@material-ui/icons/GetApp';
import { IconButton } from '@material-ui/core';
import { tokens } from "./../theme";
import { useTheme } from "@mui/material";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
};

const DataGraph = () => {
  const [employees, setEmployees] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [tooltipContent, setTooltipContent] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);

        // Prepare the data for the first chart
      // Prepare the data for the first chart
// Prepare the data for the first chart
// Prepare the data for the first chart
const chartData = response.data.map((employee) => ({
  name: formatDate(employee.datedesortie), // Use datedesortie for x-axis
  y: parseFloat(employee.prixdegazoil), // Convert to a number // Use datedesortie for y-axis
  consmyne: ((employee.quantitetotal - employee.stabilite) / employee.jourautono / 1000).toFixed(2),
}));
setChartData(chartData);


        // Prepare the data for the second chart
        // Prepare the data for the second chart

        const chartData2 = response.data.map((employee) => ({
          name: employee.datedesortie,  // Change here
          y: parseFloat(employee.prixdegazoil), // Convert to a number
          consmyne: ((employee.quantitetotal - employee.stabilite) / employee.jourautono / 1000).toFixed(2),
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
        text: 'TILILA Data',
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
          name: 'consmyne',
          data: chartData.map((dataPoint) => dataPoint.consmyne),
        },
      ],
    };

    const chartOptions2 = {
      chart: {
        type: 'line',
        backgroundColor: darkMode ? '#333' : 'transparent',
      },
      title: {
        text: 'Materiels Data',
        style: {
          color: colors.grey[100],
        },
      },
      xAxis: {
        type: 'datetime',
        labels: {
          style: {
            color: colors.grey[100],
          },
        },
      },
      yAxis: [
        {
          title: {
            text: 'Employee ID',
          },
          labels: {
            style: {
              color: colors.grey[100],
            },
          },
        },
        {
          title: {
            text: 'Type',
          },
          labels: {
            style: {
              color: colors.grey[100],
            },
          },
          opposite: true,
        },
      ],
      series: [
        {
          name: 'Employee ID',
          data: chartData2.map((dataPoint) => [
            new Date(dataPoint.name).getTime(),
            dataPoint.y,
          ]),
          type: 'line',
          yAxis: 0,
        },
        {
          name: 'cons.Myne',
          data: chartData2.map((dataPoint, index) => ({
            x: new Date(dataPoint.name).getTime(),
            y: dataPoint.y,
            consmyne: dataPoint.consmyne,
          })),
          type: 'line',
          color: 'rgba(255, 0, 0, 0.5)',
          yAxis: 0,
          dataLabels: {
            enabled: true,
            format: '{point.consmyne}',
          },
        },
      ],
      tooltip: {
        formatter: function () {
          return `<span style="color: ${this.color};">&#9679;</span> consmyne: ${this.point.consmyne}`;
        },
        style: {
          color: 'black',
          fontSize: '17px',
          padding: '8px',
        },
        borderWidth: 0,
        borderRadius: 4,
      },

      
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
    <div className="">
      <h2 align="center">TILILA</h2>

      <div id="chart-container" style={{ width: '550px', height: '400px', margin: '0 auto' }}>
        <IconButton onClick={handleExportChart} style={{color:'#4cceac'}}>
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
      text: 'TILILA BARCHART',
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
        text: 'PRIX DE GAZOIL',
      },
      labels: {
        style: {
          color: colors.grey[100],
        },
      },
    },
    series: [
      {
        name: 'PRIX DE GAZOIL',
        data: chartData.map((dataPoint) => dataPoint.y),
        style: {
          color: colors.grey[100],
        },
      },
      {
        name: 'cons.Myne',
        data: chartData.map((dataPoint) => dataPoint.consmyne),
        style: {
          color: colors.grey[100],
        },
      },
    ],
  }}
/>



<HighchartsReact
  highcharts={Highcharts}
  options={{
    
    chart: {
      backgroundColor: darkMode ? '#333' : 'transparent',
    },
    title: {
      text: 'TILILA LINECHART',
      style: {
        color: colors.grey[100],
      },
    },
    xAxis: {
      categories: chartData2.map((dataPoint) => formatDate(dataPoint.name)),
      labels: {
        style: {
          color: colors.grey[100],
        },
      },
    },
    yAxis: [
      {
        title: {
          text: 'PRIX DE GAZOIL',
        },
        labels: {
          style: {
            color: colors.grey[100],
          },
        },
      },
      {
        title: {
          text: 'DATE DE SORTIE',
        },
        labels: {
          style: {
            color: colors.grey[100],
          },
        },
        opposite: true,
      },
    ],
   
    series: [
      {
        name: 'Date De Sortie',
        data: chartData2.map((dataPoint) => dataPoint.y),
        type: 'line',
        yAxis: 0,
      },
      {
        name: 'cons.Myne',
        data: chartData2.map((dataPoint, index) => {
          const formattedDataPoint = {
            x: index,
            y: dataPoint.y,
            consmyne: dataPoint.consmyne, // Use consmyne instead of name
          };
          // Set tooltip content when the point is clicked
          formattedDataPoint.events = {
            click: function () {
              setTooltipContent(`consmyne: ${dataPoint.consmyne}`);
            },
          };
          return formattedDataPoint;
        }),
        type: 'line',
        color: 'rgba(255, 0, 0, 0.5)',
        yAxis: 0,
        dataLabels: {
          enabled: true,
          format: '{point.consmyne}', // Display consmyne in dataLabels
        },
      },
    ],
    tooltip: {
    
      formatter: function () {
        // Use the tooltipContent state to display custom tooltip
        return  `<span style="color: ${this.color};">&#9679;</span> cons.Myne: ${this.point.consmyne}`|| tooltipContent || `consmyne: ${this.point.consmyne}`;
      },
      style: {
        color: 'black', // Text color
        fontSize: '17px', // Text size
        padding: '8px', // Padding
      },
    
      borderWidth: 0, // Border width
      borderRadius: 4, // Border radius
    },
  }}
/>





      </div>
    </div>
  );
};

export default DataGraph;
