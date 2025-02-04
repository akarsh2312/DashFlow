import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import {
  Box,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBox = animated(Box);

const Dashboard = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const users = useSelector((state: RootState) => state.user.data);
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 120, friction: 14 },
  });

  // Generate mock data for the chart
  const chartData = Array.from({ length: 7 }, (_, i) => ({
    day: `Day ${i + 1}`,
    users: users.length + Math.floor(Math.random() * 5),
    count: count + Math.floor(Math.random() * 10),
  }));

  return (
    <AnimatedBox style={springProps}>
      <Box p={8}>
        <Heading mb={6}>Welcome, {currentUser?.name}</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md">
            <Heading size="md" mb={4}>Counter Stats</Heading>
            <Text fontSize="3xl" color={textColor}>{count}</Text>
          </Box>
          <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md">
            <Heading size="md" mb={4}>Total Users</Heading>
            <Text fontSize="3xl" color={textColor}>{users.length}</Text>
          </Box>
        </Grid>

        <Box mt={8} p={6} bg={cardBg} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={6}>Trends</Heading>
          <Box height="400px">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="users"
                  stroke="#8884d8"
                  name="Users"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="count"
                  stroke="#82ca9d"
                  name="Counter"
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </AnimatedBox>
  );
};

export default Dashboard;