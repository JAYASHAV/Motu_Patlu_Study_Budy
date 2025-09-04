"use client"

const TypingBox = ({ handleSubmit, btnText="", formClasses="", inputClasses="", btnClasses="", name="", placeholder="" }) => {

    return (
        <form
            action={handleSubmit}
            id="typing-area" className={`border-gray-400 border flex rounded-2xl m-2 ${formClasses} `}>
            <input type="text" name={name} placeholder={placeholder} className={`flex flex-1 border border-gray-400 bg-white text-black rounded-l-2xl active:outline-2 -outline-offset-2 ${inputClasses}`}/>
            <button type="submit" className={`border border-gray-400 text-sm rounded-r-2xl w-32 bg-black ${btnClasses}`}>{btnText}</button>
        </form>
    )
}

export default TypingBox