import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../componentss/Header";

import GeographyChart from "../../componentss/GeographyChart";
import BarChart from "../../componentss/BarChart";
import StatBox from "../../componentss/StatBox";
import ProgressCircle from "../../componentss/ProgressCircle";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import domtoimage from 'dom-to-image';
import EmployeeService from '../../services/EmployeeService';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeclarationService from '../../declaration/DeclarationService';

import { ComputerOutlined } from '@mui/icons-material';
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month.toString().padStart(2, '0')}/${year}`;
};
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [employees, setEmployees] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [declarations, setDeclarations] = useState([]);
  const [chartData4, setChartData4] = useState([]);
  const [chartData3, setChartData3] = useState([]);


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
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
         
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        
        >
          
          <StatBox
            title="5"
            subtitle="Declaration"
            progress="0.75"
           
            icon={
             
            <EmailIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="14"
            subtitle="users"
          
            icon={
              <PersonAddIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="4"
            subtitle="new materiels"
            progress="0.30"
           
            icon={
              <ComputerOutlined
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="5"
            subtitle="new Request"
          
            icon={
               <EmailIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
            <Box  style={{ width: '1600px', height:100, margin: '17px auto',position:'fixed' }}>
   
    <Box >
    

    
   
        <div  style={{marginTop:'-50px',}}> 
        <HighchartsReact
         highcharts={Highcharts}
  options={{
    chart: {
      type: 'column',
      backgroundColor: darkMode ? '#333' : 'transparent',
      height :'310px',
     
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
</div>






   
    </Box>
      </Box>
            </Box>
            
            <Box>
            <IconButton onClick={handleExportChart} style={{color:'#4cceac',marginTop:'-10px'}}>
          <GetAppIcon />
        </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-87px"> 
   
  </Box>
        </Box>
        

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <Box m="20px">
 

            <div id="chart-container" style={{ width: '550px', margin: '-70px -270px', position: 'fixed' }}>
            <Box position="absolute" top="0px" right="10px" mt="10px" mr="10px">
      <IconButton onClick={handleExportChart} style={{ color: '#4cceac' }}>
        <GetAppIcon />
      </IconButton>
    </Box>
      
<HighchartsReact
  highcharts={Highcharts}
  options={{
    chart: {
      backgroundColor: darkMode ? '#333' : 'transparent',
      height :'310px',
      position:'fixed' 
    },
    title: {
      text: 'Materiels Data',
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
        data: chartData2.map((dataPoint) => dataPoint.y),
        type: 'line',
        yAxis: 0,
       
      },
      {
        name: 'Type',
        data: chartData2.map((dataPoint, index) => ({
          x: index,
          y: dataPoint.y,
          name: dataPoint.type,
          
        })),
        type: 'line',  color: 'rgba(255, 0, 0, 0.5)' ,  lineWidth: 3, 
        yAxis: 0,
        dataLabels: {
          enabled: true,
          format: '{point.name}',
          
        },
      },
      
    ],
  }}
/>





      </div>
      </Box>
           
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
           <Box m="20px">
     
        <IconButton onClick={handleExportChart2} style={{ color: '#4cceac',marginLeft:'450px' , }}>
          <GetAppIcon />
        </IconButton>
        <div style={{marginTop:'-55px'}}>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              chart: {
                type: 'column',
                backgroundColor: darkMode ? '#333' : 'transparent',
                height:'310px'
              },
              title: {
                text: 'Declaration Data',
                style: {
                  color: colors.grey[100],
                },
              },
              xAxis: {
                categories: chartData3.map((dataPoint) => dataPoint.name),
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
          
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
         
          <Box height="200px">
          <Box m="20px">
          <IconButton
    onClick={handleExportChart2}
    style={{ color: '#4cceac', position: 'absolute',marginLeft:'400px',marginTop:'10px'  }}
  >
    <GetAppIcon />
  </IconButton>
  <div id="chart-container" style={{ marginTop: '-45px', width: '500px', marginLeft: '-50px', height: '250px' }}>
    <HighchartsReact
      highcharts={Highcharts}
           
            options={{
              chart: {
                height :'310px',
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
                  },
                ],
                
                
            }}
          />
          </div>
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
