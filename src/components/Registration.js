import React from 'react'
import '../App.css'

export default function Registration() {
  return (
    <section class="registration" id="registration">

        <h1 class="heading">Registra<span>tion</span></h1>
       
        <div class="box-container">
            <div class="container">
                <div class="title">Fill Form</div>
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box">
                                <label class="details">First Name</label>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div class="input-box">
                                <label class="details">Last Name</label>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div class="input-box">
                                <label class="details">Date of Birth</label>
                                <input type="date" id="dob" name="dob"/>
                            </div>
                            <div class="input-box">
                                <label class="details">Telephone No.</label>
                                <input type="text" placeholder="Enter phone no." required/>
                            </div>
                            <div class="input-box">
                                <label class="details">ID Type</label>
                                <select name="gender">
                                    <option value="none" selected>Old Voter ID</option>
                                    <option value="male">New Voter ID</option>
                                    <option value="female">Ghana Card</option>
                                    <option value="other">NHIS Card</option>
                                </select>
                                <input type="" placeholder="Enter card number" required />
                            </div>
                        </div>
                        <div class="gender-details">
                            <label class="gender-title">Gender</label>
                            <input type="radio" name="gender" value="male"/>
                            <label for="male">Male</label>
                            <input type="radio" name="gender" value="female"/>
                            <label for="female">Female</label>
                        </div>

                        <div class="button">
                            <input type="submit" value="Register"/>

                        </div>
                    </form>
            </div>

        </div>
        </section>
  )
}
