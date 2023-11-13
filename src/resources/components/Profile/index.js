const modules = import.meta.globEager(
    "@/resources/components/Profile/**/*.vue",
    {
      eager: true,
    }
  );
  
  const componentNames = Object.keys(modules).map((path) => {
    const parts = path.split("/");
    const componentName = parts[parts.length - 2]; // Get the subfolder name
    return componentName;
  });
  
  export default function loadProfile(app) {
    componentNames.forEach((componentName) => {
      const path = `/src/resources/components/Profile/${componentName}/${componentName}.vue`
      try { 
        app.component(`${componentName}`, modules[path].default);
      } catch (error) {
        console.error(`Failed to load component ${componentName}:`, error);
      }
    });
  }
  