import { useRouter } from 'next/router'

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);
  return (
    <div>ClientProjectsPage</div>
  )
}

export default ClientProjectsPage