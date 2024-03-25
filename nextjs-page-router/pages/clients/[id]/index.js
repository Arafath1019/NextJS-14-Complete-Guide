import {useRouter} from 'next/router';

function SingleClient() {
  const router = useRouter();
  function loadProjectHandler(){
    router.push('/clients/user/project-a');
  }
  return (
    <>
    <div>SingleClient</div>
    <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  )
}

export default SingleClient