// frontend/src/components/ui/button.jsx

export function Button({ children, className = "", ...props }) {
    return (
      <button className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${className}`} {...props}>
        {children}
      </button>
    );
  }
  
  