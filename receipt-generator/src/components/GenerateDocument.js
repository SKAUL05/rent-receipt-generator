import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import GenerateTable from './GenerateTable';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
});

/**
 * GenerateDocument — wraps each receipt page in a PDF Document.
 * Receives all form fields as props.
 */
const GenerateDocument = (props) => (
  <Document
    title={`Rent Receipts — ${props.name}`}
    author={props.owner}
    subject="Rent Receipt"
    creator="Rent Receipt Generator"
  >
    <Page size="A4" style={styles.page}>
      <GenerateTable table={props} />
    </Page>
  </Document>
);

export default GenerateDocument;