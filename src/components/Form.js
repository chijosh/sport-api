import React from 'react'

export default function Form({ onChange, onSubmit }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Select Language
                    <select onChange={onChange}>
                        <option value="en_GB">English</option>
                        <option value="sv_SE">Swedish</option>
                        <option value="et_EE">Estonian</option>
                        <option value="ru_RU">Russian</option>
                        <option value="fi_FI">Finnish</option>
                    </select>
                </label>

                <button type="submit">View live Games</button>
            </form>
        </div>
    )
}
