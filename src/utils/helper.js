import moment from "moment";

export const formatDate = (date) => {
  const d = moment(date);
  return d.isValid() ? d.format("DD MMM, YYYY") : null;
};
export const formatDateTime = (date) => {
  const d = moment(date);
  return d.isValid() ? d.format("DD MMM, YYYY hh:mm A") : null;
};

export const formatStudentApplications = (applications = []) => {
  const statusOrder = [
    { key: "to_start", title: "Shortlisting" },
    { key: "verifying_documents", title: "Verifying Documents" },
    { key: "application_filled", title: "STU" },
    /*  { key: "awaiting_response", title: "Awaiting Response" }, */
    { key: "offer_letter_received", title: "Offer Letter Received" },
    { key: "rejected", title: "Rejected" },
  ];

  const groupedData = statusOrder.reduce((acc, { key }) => {
    acc[key] = [];
    return acc;
  }, {});

  const safeApplications = Array.isArray(applications) ? applications : [];
  safeApplications.forEach((item) => {
    if (groupedData.hasOwnProperty(item.status)) {
      groupedData[item.status].push(item);
    }
  });

  return statusOrder.map(({ key, title }) => ({
    status: key,
    title,
    data: groupedData[key] || [],
  }));
};
