import { useState } from "react";
import "./signUpStyles.css";

import { Button, Form } from "react-bootstrap";

const SignUp = () => {
    const [businessChecked, setBusinessChecked] = useState(false);
    const [personalChecked, setPersonalChecked] = useState(false);
    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Create an Account</h2>
                <Form>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Form.Group className="w-45">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Enter First Name"
                            />
                        </Form.Group>
                        <Form.Group style={{ width: "25%" }}>
                            <Form.Label>Middle Name ( Optional )</Form.Label>
                            <Form.Control
                                // className="w-25 mx-auto"
                                as="input"
                                type="text"
                                placeholder="Enter Middle Name ( Optional )"
                            />
                        </Form.Group>
                        <Form.Group className="w-45">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Enter Last Name"
                            />
                        </Form.Group>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Form.Group style={{ width: "45%" }}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Enter Username"
                            />
                        </Form.Group>
                        <Form.Group style={{ width: "45%" }}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                as="input"
                                type="email"
                                placeholder="Enter E-mail"
                            />
                        </Form.Group>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Form.Group style={{ width: "45%" }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                as="input"
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Form.Group>
                        <Form.Group style={{ width: "45%" }}>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                as="input"
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Form.Group>
                    </div>
                </Form>
                {/* <button
                    type="submit"
                    class="btn btn-primary w-100"
                >
                    Sign Up
                </button> */}
                {/* <div className="my-4"> */}
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <div className="mx-5">
                        {/* <Form.Label>Personal Use</Form.Label> */}
                        <Form.Check
                            label="Business"
                            name="business"
                            type="radio"
                            reverse
                            checked={businessChecked}
                            onChange={(event) => {
                                console.log(event.target.value);
                                setBusinessChecked(event.target.checked);
                                setPersonalChecked(!event.target.checked);
                                console.log(personalChecked);
                            }}
                            // onChange={(event) => {
                            //     console.log(event.target.checked);
                            // }}
                            // disabled={disabledBusiness}
                        />
                    </div>

                    {/* <div>
                        <input type="checkbox" />
                        <label>Business</label>
                    </div> */}
                    <div>
                        {/* <Form.Label>Personal Use</Form.Label> */}
                        <Form.Check
                            reverse
                            label="Personal Use"
                            name="personalUse"
                            type="radio"
                            checked={personalChecked}
                            onChange={(event) => {
                                console.log(event.target.value);
                                setPersonalChecked(event.target.checked);
                                setBusinessChecked(!event.target.checked);
                                console.log(businessChecked);
                            }}
                            // onChange={(event) => console.log(event.target.checked)}
                        />
                    </div>
                </div>
                <Button
                    className="w-100 my-5"
                    variant="outline-primary"
                    size="lg"
                >
                    Sign Up
                </Button>
                {/* </div> */}
                {/* <form>
                    <div class="mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary w-100"
                    >
                        Sign Up
                    </button>
                </form> */}
                <div>
                    <p class="text-center mt-3">
                        Already have an account?{" "}
                        <a
                            href="login.html"
                            // open modal
                        >
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
