import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button2 } from "./Button2";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_SERVER_URL + "/api/v1/user/bulk?filter=" + filter
      )
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
  <>
    <div className="mt-4 mb-10">
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        type="text"
        placeholder="Search users..."
        className="w-full px-4 py-3 text-blue-600 border-2 border-blue-600 rounded-full"
      ></input>
    </div>
    <div>
      {users.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
</>

  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="border-t border-b border-gray-200  "> {/* Changed to border-b */}
      <div className="flex justify-between p-1"> {/* Added padding for better spacing */}
        <div className="flex">
          <div className="rounded-full text-white h-12 w-12 bg-sky-600 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
              {user.firstName[0].toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col justify-center h-full"> {/* Corrected to h-full */}
            <div>
              {user.firstName} {user.lastName}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center h-full"> {/* Corrected to h-full */}
          <Button2
            onClick={() => {
              navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }}
            label={"Send"}
          />
        </div>
      </div>
    </div>
  );
}

export default User;
