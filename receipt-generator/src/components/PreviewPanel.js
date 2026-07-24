import { PDFViewer } from '@react-pdf/renderer';
import GenerateDocument from './GenerateDocument';

/**
 * PreviewPanel — shows a live PDF preview using @react-pdf/renderer's PDFViewer.
 * When formData is null or incomplete, shows a styled placeholder.
 */
const PreviewPanel = ({ formData }) => {
  const isReady = formData &&
    formData.name &&
    formData.owner &&
    formData.rent &&
    formData.address &&
    formData.startDate &&
    formData.endDate;

  return (
    <div className="preview-panel">
      <div className="glass-card">
        <h2 className="card-title">Live Preview</h2>

        {!isReady ? (
          <div className="preview-placeholder">
            <div className="preview-placeholder-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3>Your receipt preview will appear here</h3>
            <p>Fill in all required fields on the left to see a live preview of your rent receipts before downloading.</p>
          </div>
        ) : (
          <div className="pdf-viewer-wrapper">
            <PDFViewer width="100%" height="580" style={{ border: 'none', borderRadius: 12 }}>
              <GenerateDocument {...formData} />
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewPanel;
