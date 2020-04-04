import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Kiambu',
    keyIssues: [{title: 'Wrong Prescription', location: 'Kosovo'}, {
      title: 'Opened late',
      location: 'Kiambu'
    }, {title: 'Bad receipts', location: 'New York'}, {
      title: 'Delay in lab',
      location: 'Kiambu'
    }, {title: 'Careless waste disposal', location: 'Kiambu'},],
    analytics: [{
      title: 'Foot fall',
      value: '9K',
      description: 'Patients',
      positiveChange: true,
      changeValue: 0.2,
      data: [
        {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ]
    }, {
      title: 'Patient satisfaction',
      value: 5.3,
      description: 'NPS',
      positiveChange: false,
      changeValue: 0.1,
      data: [
        {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 3100, pv: 1380, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ]
    }, {
      title: 'Revenue',
      value: '3.6m',
      description: 'Kenya shillings',
      positiveChange: true,
      changeValue: 1.2,
      data: [
        {
          name: 'Page A', uv: 2000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 2000, pv: 1000, amt: 2210,
        },
        {
          name: 'Page C', uv: 4000, pv: 2000, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 1090, pv: 1000, amt: 2100,
        },
      ]
    }],
    staffPerformance: [
      {
        id: uuid(),
        name: 'Jay Makini',
        effValue: 7.8,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 6.4,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 25,
      },
      {
        id: uuid(),
        ref: 'CDD1048',
        name: 'Amina Mohamed',
        effValue: 3.2,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 3.7,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 12,

      },
      {
        id: uuid(),
        name: 'Mary Apiyo',
        effValue: 3.9,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 3.3,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 87,
        reported: 52,
      },
      {
        id: uuid(),
        name: 'Mathew Wafula',
        effValue: 3.6,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 4.6,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 29,
      },
      {
        id: uuid(),
        name: 'Mercy Nkirote',
        effValue: 4.2,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 4.9,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 40,
      },
      {
        id: uuid(),
        name: 'Andre Patel',
        effValue: 4.0,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 5.0,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 16,
      }
    ]
  },
  {
    id: uuid(),
    name: 'Mukuru Kwa Reuben',
    keyIssues: [{title: 'Wrong Prescription', location: 'Kosovo'}, {
      title: 'Opened late',
      location: 'Kiambu'
    }, {title: 'Bad receipts', location: 'New York'}, {
      title: 'Delay in lab',
      location: 'Kiambu'
    }, {title: 'Careless waste disposal', location: 'Kiambu'},],
    analytics: [{
      title: 'Foot fall',
      value: '21K',
      description: 'Patients',
      positiveChange: true,
      changeValue: 0.2,
      data: [
        {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 3000, pv: 2000, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 4090, pv: 5000, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ]
    }, {
      title: 'Patient satisfaction',
      value: 5.8,
      description: 'NPS',
      positiveChange: false,
      changeValue: 0.1,
      data: [
        {
          name: 'Page A', uv: 1000, pv: 5000, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 5080, pv: 1008, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ]
    }, {
      title: 'Revenue',
      value: '3.3m',
      description: 'Kenya shillings',
      positiveChange: true,
      changeValue: 1.2,
      data: [
        {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 1000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 3300, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 1190, pv: 4300, amt: 2100,
        },
      ]
    }],
    staffPerformance: [
      {
        id: uuid(),
        name: 'Lawrence John',
        effValue: 5.7,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 5.7,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 21,
      },
      {
        id: uuid(),
        ref: 'CDD1048',
        name: 'Amina Mohamed',
        effValue: 5.3,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 9.0,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 73,
        reported: 26,

      },
      {
        id: uuid(),
        name: 'Wanja Muriithi',
        effValue: 9.4,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 9.8,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 82,
      },
      {
        id: uuid(),
        name: 'Mathew Wafula',
        effValue: 9.1,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 9.9,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 22,
      },
      {
        id: uuid(),
        name: 'Mercy Nkirote',
        effValue: 9.3,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 8.3,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 30,
      },
      {
        id: uuid(),
        name: 'Andre Patel',
        effValue: 8.0,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 8.7,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 87,
        reported: 50,
      }
    ]

  },
  {
    id: uuid(),
    name: 'Mukuru Kwa Njenga',
    keyIssues: [{title: 'Wrong Prescription', location: 'Kosovo'}, {
      title: 'Opened late',
      location: 'Kiambu'
    }, {title: 'Bad receipts', location: 'New York'}, {
      title: 'Delay in lab',
      location: 'Kiambu'
    }, {title: 'Careless waste disposal', location: 'Kiambu'},],
    analytics: [{
      title: 'Foot fall',
      value: '16K',
      description: 'Patients',
      positiveChange: true,
      changeValue: 0.2,
      data: [
        {
          name: 'Page A', uv: 1500, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 2300, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 1100, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 1090, pv: 4300, amt: 2100,
        },
      ]
    }, {
      title: 'Patient satisfaction',
      value: 8.4,
      description: 'NPS',
      positiveChange: false,
      changeValue: 0.1,
      data: [
        {
          name: 'Page A', uv: 6000, pv: 1000, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 8008, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 4190, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ]
    }, {
      title: 'Revenue',
      value: '5.3m',
      description: 'Kenya shillings',
      positiveChange: true,
      changeValue: 1.2,
      data: [
        {
          name: 'Page A', uv: 2000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 6808, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 1090, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ]
    }],
    staffPerformance: [
      {
        id: uuid(),
        name: 'Amina Abdi',
        effValue: 8.6,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 8.8,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 36,
      },
      {
        id: uuid(),
        ref: 'CDD1048',
        name: 'Amina Mohamed',
        effValue: 8.8,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 7.8,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 42,
        reported: 42,

      },
      {
        id: uuid(),
        name: 'Wendy Mkamba',
        effValue: 5.3,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 8.8,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 68,
      },
      {
        id: uuid(),
        name: 'Mathew Wafula',
        effValue: 7.8,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 5.3,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 58,
      },
      {
        id: uuid(),
        name: 'Mercy Nkirote',
        effValue: 8.8,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 7.8,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 87,
        reported: 80,
      },
      {
        id: uuid(),
        name: 'Andre Patel',
        effValue: 8.4,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 8.8,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 87,
        reported: 40,
      }
    ]
  },
  {
    id: uuid(),
    name: 'Baba Dogo',
    keyIssues: [{title: 'Wrong Prescription', location: 'Kosovo'}, {
      title: 'Opened late',
      location: 'Kiambu'
    }, {title: 'Bad receipts', location: 'New York'}, {
      title: 'Delay in lab',
      location: 'Kiambu'
    }, {title: 'Careless waste disposal', location: 'Kiambu'},],
    analytics: [{
      title: 'Foot fall',
      value: '18K',
      description: 'Patients',
      positiveChange: true,
      changeValue: 0.2,
      data: [
        {
          name: 'Page A', uv: 8000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 1000, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 5090, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 1000, amt: 2100,
        },
      ]
    }, {
      title: 'Patient satisfaction',
      value: 5.3,
      description: 'NPS',
      positiveChange: false,
      changeValue: 0.1,
      data: [
        {
          name: 'Page A', uv: 1000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 9008, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 5100,
        },
      ]
    }, {
      title: 'Revenue',
      value: '2.3m',
      description: 'Kenya shillings',
      positiveChange: true,
      changeValue: 1.2,
      data: [
        {
          name: 'Page A', uv: 1000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 2800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 5490, pv: 4300, amt: 9100,
        },
      ]
    }],
    staffPerformance: [
      {
        id: uuid(),
        name: 'Yu Jin',
        effValue: 8.4,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 8.8,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 8,
      },
      {
        id: uuid(),
        ref: 'CDD1048',
        name: 'Amina Mohamed',
        effValue: 8.4,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 5.3,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 6,

      },
      {
        id: uuid(),
        name: 'Vincent Nduru',
        effValue: 8.8,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 8.8,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 73,
        reported: 20,
      },
      {
        id: uuid(),
        name: 'Mathew Wafula',
        effValue: 7.8,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 8.8,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 45,
      },
      {
        id: uuid(),
        name: 'Mercy Nkirote',
        effValue: 7.8,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 8.8,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 42,
        reported: 9,
      },
      {
        id: uuid(),
        name: 'Andre Patel',
        effValue: 5.3,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 7.8,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 25,
      }
    ]
  },
  {
    id: uuid(),
    name: 'Kosovo',
    keyIssues: [{title: 'Wrong Prescription', location: 'Kosovo'}, {
      title: 'Opened late',
      location: 'Kiambu'
    }, {title: 'Bad receipts', location: 'New York'}, {
      title: 'Delay in lab',
      location: 'Kiambu'
    }, {title: 'Careless waste disposal', location: 'Kiambu'},],
    analytics: [{
      title: 'Foot fall',
      value: '30K',
      description: 'Patients',
      positiveChange: true,
      changeValue: 0.2,
      data: [
        {
          name: 'Page A', uv: 7000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 7000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 1800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ]
    }, {
      title: 'Patient satisfaction',
      value: 4.8,
      description: 'NPS',
      positiveChange: false,
      changeValue: 0.1,
      data: [
        {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ]
    }, {
      title: 'Revenue',
      value: '2.9m',
      description: 'Kenya shillings',
      positiveChange: true,
      changeValue: 1.2,
      data: [
        {
          name: 'Page A', uv: 8000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 4800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 8890, pv: 7200, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ]
    }],
    staffPerformance: [
      {
        id: uuid(),
        name: 'Jin Pin',
        effValue: 5.3,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 6.6,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 15,
      },
      {
        id: uuid(),
        ref: 'CDD1048',
        name: 'Amina Mohamed',
        effValue: 4.8,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 6.6,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 87,
        reported: 13,

      },
      {
        id: uuid(),
        name: 'Cate Waitherero',
        effValue: 6.6,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 4.8,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 87,
        reported: 35,
      },
      {
        id: uuid(),
        name: 'Mathew Wafula',
        effValue: 6.6,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 6.6,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 18,
      },
      {
        id: uuid(),
        name: 'Mercy Nkirote',
        effValue: 4.8,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 6.6,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 71,
      },
      {
        id: uuid(),
        name: 'Andre Patel',
        effValue: 6.6,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 4.8,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 73,
        reported: 46,
      }
    ]
  },
  {
    id: uuid(),
    name: 'Mukuru Kwa Kayaba',
    keyIssues: [{title: 'Wrong Prescription', location: 'Kosovo'}, {
      title: 'Opened late',
      location: 'Kiambu'
    }, {title: 'Bad receipts', location: 'New York'}, {
      title: 'Delay in lab',
      location: 'Kiambu'
    }, {title: 'Careless waste disposal', location: 'Kiambu'},],
    analytics: [{
      title: 'Foot fall',
      value: '7K',
      description: 'Patients',
      positiveChange: true,
      changeValue: 0.2,
      data: [
        {
          name: 'Page A', uv: 2000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 5800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 6300, amt: 2100,
        },
      ]
    }, {
      title: 'Patient satisfaction',
      value: 6.6,
      description: 'NPS',
      positiveChange: false,
      changeValue: 0.1,
      data: [
        {
          name: 'Page A', uv: 1000, pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 2500, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 9190, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 1100, amt: 2100,
        },
      ]
    }, {
      title: 'Revenue',
      value: '4.9m',
      description: 'Kenya shillings',
      positiveChange: true,
      changeValue: 1.2,
      data: [
        {
          name: 'Page A', uv: 5000, pv: 9400, amt: 2400,
        },
        {
          name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 2908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 1490, pv: 8300, amt: 2100,
        },
      ]
    }],
    staffPerformance: [
      {
        id: uuid(),
        name: 'Maloko Koloma',
        effValue: 6.6,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 4.8,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 58,
      },
      {
        id: uuid(),
        ref: 'CDD1048',
        name: 'Amina Mohamed',
        effValue: 6.6,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 6.9,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 87,
        reported: 52,

      },
      {
        id: uuid(),
        name: 'Jane Koloma',
        effValue: 4.8,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 6.9,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 84,
        reported: 5,
      },
      {
        id: uuid(),
        name: 'Mathew Wafula',
        effValue: 6.9,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 4.8,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 3,
      },
      {
        id: uuid(),
        name: 'Mercy Nkirote',
        effValue: 6.9,
        effPositiveChange: false,
        effChangeValue: 0.1,
        npValue: 8.4,
        npPositiveChange: true,
        npChangeValue: 0.3,
        efficiency: 42,
        reported: 34,
      },
      {
        id: uuid(),
        name: 'Andre Patel',
        effValue: 4.8,
        effPositiveChange: true,
        effChangeValue: 0.1,
        npValue: 5.3,
        npPositiveChange: false,
        npChangeValue: 0.3,
        efficiency: 56,
        reported: 20,
      }
    ]
  }
];
