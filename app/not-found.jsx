import { redirect } from "next/navigation";

// redirecting to the lost page because can't use a client side component here
const NotFound = () => {
  redirect("/lost");
};

export default NotFound;
