import { AppRouter } from '../../router/AppRouter.jsx'; // Import the AppRouter component

// ServiceContainer component for containing routing functionality
export const ServiceContainer = () => {
  return (
    <div className="service-container">
      {/* Render the AppRouter component for routing */}
      <AppRouter />
    </div>
  );
};