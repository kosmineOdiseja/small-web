import React, { useState, useRef }  from 'react'

function CheckBoxes() {

	const [ state, setState ] = useState({
		textValue: 'Initial value', 
		languages: {
			javascript: false,
			php: false,
			typeScript: false,
			golang: false,
		}
	})



	// const checkBoxHandler = (e) => {
		// if we are passing one parameter we can stop using the brackets 
	const checkBoxHandler = e => {
		setState(state)

		console.log(e.target.checked)
	}

  return (
		<div className='text-xl text-slate-900  underline flex'>
			<div className='flex flex-col justify-center items-center m-auto p-5'>
				Php<input type='checkbox' name="languages" value="php" onChange={checkBoxHandler} 
				checked={state.languages.php}/>
				JavaScript<input type='checkbox' name="languages" value="javaScript" onChange={checkBoxHandler} />
				TypeScript<input type='checkbox' name="languages" value="typeScript" onChange={checkBoxHandler} />
				Golang<input type='checkbox' name="languages" value="golang" onChange={checkBoxHandler} />
			</div> 
			<div>
				checked: 0 
				
			</div>
		</div>
  )
}

export default CheckBoxes