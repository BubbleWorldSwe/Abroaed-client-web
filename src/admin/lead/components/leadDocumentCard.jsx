import { Download } from "lucide-react"

const LeadDocumentCard = () => {
    return (
        <>
            <div
                className="p-4 flex flex-col justify-between flex-shrink-0 w-96 h-72 bg-gradient-to-b from-[#00000033] to-[#363A3D] rounded-lg"
            >
                <div className="flex justify-between items-start">
                    <div className="text-sm font-medium p-1 px-2 text-black bg-[White] rounded-full">Government Doc</div>
                </div>
                <div>
                    <div className="text-white text-sm">
                        Aadhar Card
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <div className="text-white">Garvit_Aadhar Card.pdf</div>
                        <button className="text-white">
                            <Download />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadDocumentCard