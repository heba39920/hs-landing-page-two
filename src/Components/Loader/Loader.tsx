import { BounceLoader } from "react-spinners"


interface LoaderProps {
  loading: boolean;
}

const Loader = ({ loading }: LoaderProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black/30">
        <BounceLoader loading={loading}  size={100}/>
      
    </div>
  )
}

export default Loader
