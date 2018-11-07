import React, { useState, useEffect } from 'react';

export default function Hooks(props) {

  const name = useFormInput('Hooks')
  const width = useWindowWidth();
  useDocumentTitle(name.value);

  return (
    <div>
        <input
        {...name}
        />
        <p>Width: {width}</p>
    </div>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  })
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}