export const getThemeByStorage = () => {
  const storage = localStorage.getItem('theme');
  const theme = storage ? storage : 'light';
  if (!storage) {
    localStorage.setItem('theme', 'light');
  }
  document.documentElement.classList.add(theme);
  return theme;
}

export const setThemeByStorage = (theme: string) => {
  localStorage.setItem('theme', theme);
  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    return;
  }
  document.documentElement.classList.remove('light');
  document.documentElement.classList.add('dark');
}
