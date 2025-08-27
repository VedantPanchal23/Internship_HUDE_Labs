import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const initialState = {
  userName: "",
  email: "",
  password: "",
  cnfpassword: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    if(formData.userName == "" || formData.email == "" || formData.password == "" || formData.cnfpassword == ""){
      toast({
        title: "Please fill all the fields",
          variant: "destructive",
      });
      return;
    }
    if(formData.password.length < 8){
      toast({
        title: "Password must be at least 8 characters long",
          variant: "destructive",
      });
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+={}[\]|\'<>?/])\S{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      toast({
        title: "Password must contain at least one uppercase letter \n one lowercase letter \n one digit \n one special character",
          variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.cnfpassword) {
      toast({
        title: "Password and confirm password does not match",
          variant: "destructive",
      });
      return; 
    }
    else{
      dispatch(registerUser(formData))
        .then((data) => {
          // Log the response to inspect it
          console.log("Registration response:", data);

          if (data?.payload?.success) {
            toast({
              title: data.payload.message || "Registration successful",
            });
            navigate("/auth/login");
          } else {
            toast({
              title: data?.payload?.message || "Registration failed",
              variant: "destructive",
            });
          }
        })
        .catch((error) => {
          console.error("Error during registration:", error);
          toast({
            title: "Registration failed",
            description: "An unexpected error occurred. Please try again.",
            variant: "destructive",
          });
        });

    }
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
