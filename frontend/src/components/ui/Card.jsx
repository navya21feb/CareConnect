// frontend/src/components/ui/card.jsx

export function Card({ children, className = "" }) {
    return <div className={`rounded-xl border p-4 shadow ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children, className = "" }) {
    return <div className={`mt-2 text-sm text-gray-700 ${className}`}>{children}</div>;
  }
  

  