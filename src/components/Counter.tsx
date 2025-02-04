import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../store/counterSlice';
import { RootState } from '../types';
import { ChevronUp, ChevronDown, RotateCcw } from 'lucide-react';
import { Button, VStack, Text, Box } from '@chakra-ui/react';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const props = useSpring({
    from: { height: '0vh' },
    to: { height: `${Math.min(count * 10, 100)}vh` },
    config: { tension: 120, friction: 14 },
  });

  return (
    <Box position="relative" h="100vh" overflow="hidden">
      <animated.div
        style={{
          ...props,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: 'linear-gradient(to top, #2563eb, #3b82f6)',
          zIndex: -1,
        }}
      />
      <VStack
        spacing={4}
        justify="center"
        align="center"
        h="100vh"
        bg="transparent"
      >
        <Text fontSize="6xl" fontWeight="bold" color="white">
          {count}
        </Text>
        <Button
          leftIcon={<ChevronUp />}
          colorScheme="blue"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          leftIcon={<ChevronDown />}
          colorScheme="blue"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          leftIcon={<RotateCcw />}
          colorScheme="red"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </VStack>
    </Box>
  );
};

export default Counter