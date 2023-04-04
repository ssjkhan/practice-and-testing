import useAuth from "@features/auth/useAuth";

export default function Logout() {
  const { logout } = useAuth();

  return (
    <div className="form-el">
      <button onClick={logout}>Logout</button>
    </div>
  );
}
