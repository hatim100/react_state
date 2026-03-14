

const ToggleBody = () => {

    const toggleClass = () => {
        document.body.classList.toggle("dark");
    }

  return (
    <div>
      <button onClick={toggleClass}>
        Toggle Body Class
      </button>
    </div>
  )
}

export default ToggleBody
