
import EventProvider from './context/EventProvider';
import { router } from './navigation/AppRouter';
import { RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <EventProvider>

          <RouterProvider router={router}/>
      </EventProvider>
    </>
  );
}

export default App;
