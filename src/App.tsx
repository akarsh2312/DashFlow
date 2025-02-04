import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { Box, Container, Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/authSlice';
import { RootState } from './types';

function AppContent() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const navBg = useColorModeValue('blue.500', 'blue.600');

  return (
    <Box minH="100vh">
      <Flex as="nav" bg={navBg} p={4} color="white">
        <Container maxW="container.xl">
          <Flex gap={4} alignItems="center">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button colorScheme="whiteAlpha">Dashboard</Button>
                </Link>
                <Link to="/">
                  <Button colorScheme="whiteAlpha">Counter</Button>
                </Link>
                <Link to="/user-form">
                  <Button colorScheme="whiteAlpha">User Form</Button>
                </Link>
                <Link to="/editor">
                  <Button colorScheme="whiteAlpha">Rich Text Editor</Button>
                </Link>
                <Button
                  colorScheme="red"
                  ml="auto"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button colorScheme="whiteAlpha">Login</Button>
              </Link>
            )}
          </Flex>
        </Container>
      </Flex>

      <Container maxW="container.xl" py={8}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Counter />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-form"
            element={
              <PrivateRoute>
                <UserForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/editor"
            element={
              <PrivateRoute>
                <RichTextEditor
                  content=""
                  onChange={(html) => console.log(html)}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <AppContent />
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;