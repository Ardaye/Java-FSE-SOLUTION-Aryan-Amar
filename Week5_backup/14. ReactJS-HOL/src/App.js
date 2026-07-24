import { useState } from 'react';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light'); // or 'dark', can be toggled

  // Sample employees data (you may have your own)
  const employees = [
    { id: 1, name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' },
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        {/* Optional: button to toggle theme */}
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <EmployeesList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;