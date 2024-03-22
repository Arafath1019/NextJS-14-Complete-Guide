import Link from "next/link";

function Clients() {
  const clients = [
    { id: "1", name: "First Client" },
    { id: "2", name: "Second Client" },
    { id: "3", name: "Third Client" },
  ];
  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map((client, index) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;
