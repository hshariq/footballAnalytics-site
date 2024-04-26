import ResponsiveAppBar from "../NavBar/NavBarNew";
import './Dashboard.css'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { jsPDF } from "jspdf";





function Dashboard() {
    const getPDF = () => {
        const container = document.getElementById('dashboard');
        console.log(container);
        htmlToImage.toPng(document.getElementById('pdf'), { quality: 0.95 })
        .then(function (dataUrl) {
          console.log("Image data URL:", dataUrl);
          var link = document.createElement('a');
          console.log(link);
          link.download = 'my-image-name.jpeg';
          const pdf = new jsPDF();
          const imgProps= pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
          pdf.save("download.pdf"); 
        });
    }
    return (
        <div className="dashboard-container" id="pdf">
            {/* <ResponsiveAppBar /> */}
            <div className="db-page-container" id="dashboard">
                <iframe title="fa" width="1140" height="541.25" src="https://app.powerbi.com/view?r=eyJrIjoiNTA3NGJjYmMtZWFhMy00MWM2LTk4OWYtOGY5YmFmMGQ2MzJjIiwidCI6ImZlZTNiOTE2LTAxYzEtNDk4Ny1hNjQ2LWUxOTM0MzJiOWVhYSIsImMiOjl9" frameBorder="0" allowFullScreen={true}></iframe>
            </div>
            <button onClick={getPDF}>export</button>
        </div>
    );
}

export default Dashboard;
