import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      borderStyle: 'solid',
      borderWidth: 1,
      maxHeight: '35%'
    }
  });
  



const GenerateTable = ({table}) => {
    var dateStart = new Date(table.startDate);
    var dateEnd = new Date(table.endDate);
    var daysOfYear = [];
  
    var loop = new Date(dateStart);
    while(loop <= dateEnd){
      daysOfYear.push(loop.toLocaleString('default', { month: 'short' }) + " " +loop.getFullYear())
      var newDate = loop.setMonth(loop.getMonth() + 1);
      loop = new Date(newDate);
    }
    console.log(daysOfYear);
    console.log(table);
  
    const returnTables = daysOfYear.map((days, index) =>
        <View style={styles.section} key={(index + 1).toString()} wrap={false}>
        <Text style={{ fontSize: 12 }}>RENT RECEIPT</Text>
        <Text style={{ fontSize: 11 , paddingTop: 5}}>{days}</Text>
        <Text style={{ fontSize: 11 , textAlign: 'right', paddingRight: '7%'}}> Receipt {(index + 1).toString()}</Text>
        <Text style={{ fontSize: 11,  paddingTop: '7%', paddingRight:'3%' }}>Received sum of INR {table.rent} from {table.name} towards the rent of property located at {table.address} for the period {days}</Text>
        <Text style={{ fontSize: 11 , paddingTop: '10%'}} >Signature</Text>
        <Text style={{ fontSize: 11 , paddingTop: 8}}>{table.owner} (Landlord)</Text>
        <Text style={{ fontSize: 11 , paddingTop: 8}}>{table.pan} (PAN Number)</Text>
        </View>
    );
  
    return (returnTables);
  }

export default GenerateTable;