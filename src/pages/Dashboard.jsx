export default function Dashboard({ user }) {
  return (
    <section className="section">
      <h4>Hello, {user?.name}</h4>
    </section>
  );
}
