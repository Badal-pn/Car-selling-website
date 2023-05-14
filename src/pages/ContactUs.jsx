import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const [user, setUser] = useState({
  
    firstName: "",
    lastName: "",
    emailId: "",
    message: "",
    phoneNo: "",
    pincode: ""
  });

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/contact/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      console.log("******near toast thing");
      toast.success("Submitted Successfully!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.warn("result", result);
      result
        .json()
        .then((res) => {
          console.log("response", res);
          setUser({
            firstName: "",
            lastName: "",
            emailId: "",
            message: "",
            phoneNo: "",
          });
        })
        .catch((error) => {
          console.log("******", error);
          console.log(error);
        });
    });
  };

  return (
    <div class="container">
      <div class=" text-center mt-5 ">
        <h1>We would love to hear from you!</h1>
      </div>

      <div class="row ">
        <div class="col-lg-7 mx-auto">
          <div class="card mt-2 mx-auto p-4 bg-light">
            <div class="card-body bg-light">
              <div class="container">
                <form id="contact-form" role="form">
                  <div class="controls">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_name">First Name *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Please enter your First Name *"
                            required="required"
                            data-error="First Name is required."
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_lastname">Last Name *</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            class="form-control"
                            placeholder="Please enter your Last Name *"
                            required="required"
                            data-error="Last Name is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Please enter your Email *"
                            required="required"
                            data-error="Valid Email is required."
                          />
                        </div>
                      </div>
                     
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="form_phoneNumber">Mobile *</label>
                          <input
                            id="form_phoneNumber"
                            type="text"
                            class="form-control"
                            placeholder="Please enter your Mobile number *"
                            required="required"
                            data-error="Valid Mobile number is required."
                          />
                        </div>
                      </div>
                     
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                          ></textarea>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <input
                          type="submit"
                          class="btn btn-success btn-send  pt-2 btn-block"
                          value="Submit Feedback"
                          onSubmit={saveUser}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
