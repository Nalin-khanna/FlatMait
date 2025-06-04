
import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';


type FormDataType = {
  landlordFullName: string;
landlordPhone: string;
landlordAddress: string;
tenantFullName: string;
tenantPhone: string;
tenantAddress: string;
propertyState: string;
propertyCity: string;
houseNo: string;
streetNo: string;
monthlyRent: string;
securityDeposit: string;
noticePeriod: string;
agreementValidity: string;
createdBy: string;
}
type RentalAgreementProps = {
  formData : FormDataType
}

const Contract_template = ({formData} : RentalAgreementProps) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>RENTAL AGREEMENT</Text>

      <Text style={styles.paragraph}>
        This Rental Agreement is made on this day of __________, 20__.
      </Text>

      <Text style={styles.sectionTitle}>BETWEEN:</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Landlord:</Text> {formData.landlordFullName}{"\n"}
        <Text style={styles.bold}>Phone:</Text> {formData.landlordPhone}{"\n"}
        <Text style={styles.bold}>Address:</Text> {formData.landlordAddress}
      </Text>

      <Text style={styles.sectionTitle}>AND:</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Tenant:</Text> {formData.tenantFullName}{"\n"}
        <Text style={styles.bold}>Phone:</Text> {formData.tenantPhone}{"\n"}
        <Text style={styles.bold}>Address:</Text> {formData.tenantAddress}
      </Text>

      <Text style={styles.sectionTitle}>PROPERTY DETAILS:</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>State:</Text> {formData.propertyState}{"\n"}
        <Text style={styles.bold}>City:</Text> {formData.propertyCity}{"\n"}
        <Text style={styles.bold}>House No:</Text> {formData.houseNo}{"\n"}
        <Text style={styles.bold}>Street No:</Text> {formData.streetNo}
      </Text>

      <Text style={styles.sectionTitle}>AGREEMENT TERMS:</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Monthly Rent:</Text> ₹{formData.monthlyRent}{"\n"}
        <Text style={styles.bold}>Security Deposit:</Text> ₹{formData.securityDeposit}{"\n"}
        <Text style={styles.bold}>Notice Period:</Text> {formData.noticePeriod} days{"\n"}
        <Text style={styles.bold}>Agreement Validity:</Text> {formData.agreementValidity} months{"\n"}
        <Text style={styles.bold}>Created By:</Text> {formData.createdBy}
      </Text>

      <Text style={styles.paragraph}>
        This agreement is made in accordance with the laws of the state and is binding upon both parties.
        Both parties agree to the terms and conditions set forth in this agreement and acknowledge receipt of a copy.
      </Text>

      <Text style={{ marginTop: 40 }}>
        ____________________________{"\n"}
        Landlord Signature
      </Text>
      
      <Text style={{ marginTop: 20 }}>
        ____________________________{"\n"}
        Tenant Signature
      </Text>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Times-Roman',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  paragraph: {
    marginTop: 8,
    lineHeight: 1.5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Contract_template;
