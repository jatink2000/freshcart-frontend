import React, { useState } from 'react'

function Review() {

    return (
        <>


            <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
                <div
                    style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        maxWidth: '400px',
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <h3 className='font-bold mb-4'>Write A Review</h3>
                    <label>Your Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            marginBottom: '0.75rem',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />

                    <label>Your Review</label>
                    <textarea
                        placeholder="Your Review"
                        rows="4"
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            marginBottom: '0.75rem',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                    <button
                        style={{
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            padding: '10px 25px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>

        </>
    )
}

export default Review
