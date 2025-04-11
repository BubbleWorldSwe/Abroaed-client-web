import moment from "moment";

export const formatDate = (date) => {
  return moment(date).format("DD MMM, YYYY");
};

export const formatDateTime = (date) => {
  return moment(date).format("DD MMM, YYYY hh:mm A");
};

export const formatStudentApplications = (applications = []) => {
  const statusOrder = [
    { key: "to_start", title: "To Start" },
    { key: "verifying_documents", title: "Verifying Documents" },
    { key: "application_filled", title: "Application Filled" },
    { key: "awaiting_response", title: "Awaiting Response" },
    { key: "rejected", title: "Rejected" },
    { key: "offer_letter_received", title: "Offer Letter Received" },
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
