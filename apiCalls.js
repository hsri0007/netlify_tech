import axios from "axios";
const dev = process.env.NODE_ENV !== "production";

const server = dev
  ? "http://localhost:8000/backend"
  : "https://tkadmin.mindmajixtechhub.com/backend";

export const getTrendingCourses = async (path) => {
  try {
    const courses = await axios.get(`${server}/home/${path}`);
    return new Promise((resolve, reject) => {
      return resolve(courses);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

// export const getAllCourses = async (details) => {
//   try
//   {
//     const { search_string } = details;
//     const courses = await axios.get(`${server}/all-courses`, {
//       params: {
//         search_string
//       }
//     });
//     return new Promise((resolve, reject) => {
//       return resolve(courses.data.final_obj);
//     });
//   } catch (err)
//   {
//     console.log(err);
//     return new Promise((resolve, reject) => {
//       return resolve("Some error Occoured");
//     });
//   }
// };
export const getAllCourses = async (details) => {
  // console.log('*********this is details***********: ', details);
  const { search_string, limit, offset } = details;
  try {
    const courses = await axios.get(`${server}/all-courses`, {
      params: {
        search_string,
        limit,
        offset,
      },
    });
    return new Promise((resolve, reject) => {
      return resolve(courses.data);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getRelatedBlogs = async (details) => {
  // console.log('*********this is details***********: ', details);
  const { blog_category, blog_type, url_title } = details;
  try {
    const courses = await axios.get(`${server}/related-blogs`, {
      params: {
        blog_category,
        blog_type,
        url_title,
      },
    });
    return new Promise((resolve, reject) => {
      return resolve(courses.data);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getBlogsByURL = async (details) => {
  const { search_string } = details;
  try {
    const blogs = await axios.get(`${server}/articles/${search_string}`);
    return new Promise((resolve, reject) => {
      return resolve(blogs.data.content);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getAllCategories = async (details) => {
  const { search_string, limit, offset } = details;
  try {
    const courses = await axios.get(`${server}/categories`, {
      params: {
        search_string,
        limit,
        offset,
      },
    });

    return new Promise((resolve, reject) => {
      return resolve(courses.data);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getAllCourseOffers = async () => {
  try {
    const categories = await axios.get(`${server}/all-course-offers`);
    return new Promise((resolve, reject) => {
      return resolve(categories.data.final_obj);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getData = async (props) => {
  console.log(props);
  var send_obj = {};

  try {
    // const d = await axios.get(`${server}/misc/pagetype?url_title=${props}`);
    // const type = d.data.final_obj.type_d.type;
    const type = "course";

    if (type === "course") {
      const data = await axios.get(`${server}/course-home?url_title=${props}`);
      send_obj.course_info = data.data.final_obj;

      send_obj.type = data.data.type_d.type;
    } else if (type === "articles") {
      const data = await axios.get(
        `${server}/tutorials/url?url_title=${props}`
      );
      send_obj.course_info = data.data.final_obj.article;
    }
    send_obj.categories = [];
    return new Promise((resolve, reject) => {
      return resolve(send_obj);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (props) => {
  try {
    const data = await axios.get(`${server}/categories/slug/${props}`);
    return new Promise((resolve, reject) => {
      return resolve(data);
    });
  } catch (error) {
    return new Promise((resolve, reject) => {
      return reject(error);
    });
  }
};

export const postEnquiry = async (props) => {
  // console.log('******this is props from apiCalls**********: ', props);

  try {
    const enquiry = await axios.post(`${server}/enquiry`, {
      ...props,
    });

    return new Promise((resolve, reject) => {
      return resolve(enquiry.data);
    });
  } catch (error) {
    console.log(error);
  }
  return;
};

export const getIPDetails = async () => {
  try {
    // const ipStackKey = "a938dcadaece3a33843e21ddc8d70a99";
    // const metadata = await axios.get(`https://api.ipstack.com/check
    // ?access_key=${ipStackKey}`);
    const metadata = await axios.get(
      "https://api.ipstack.com/check?access_key=a938dcadaece3a33843e21ddc8d70a99"
    );
    //   await axios.get(`http://api.ipstack.com/${ipaddress}
    // ?access_key=${ipStackKey}`);

    const res = metadata?.data;
    console.log(res, "test ips stack");

    let resp = {
      country: "IN",
      country_calling_code: `+91`,
    };

    if (res.country_code) {
      resp.country = res.country_code;
    }

    if (res.country_calling_code) {
      resp.country_calling_code = `+${res?.location.calling_code}`;
    }

    return new Promise((resolve, reject) => {
      return resolve(res);
    });
  } catch (error) {
    console.log(error);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getAllReviews = async (props) => {
  try {
    const reviews = await axios.get(`${server}/reviews`, {
      params: {
        ...props,
      },
    });
    return new Promise((resolve, reject) => {
      return resolve(reviews.data);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getAllBlogs = async (details) => {
  // console.log('*********this is details***********: ', details);
  try {
    const blogs = await axios.get(`${server}/blogs`, {
      params: {
        ...details,
      },
    });
    return new Promise((resolve, reject) => {
      return resolve(blogs.data);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const razorpayOrder = async (props) => {
  // console.log('******this is props from apiCalls**********: ', props);

  try {
    const enquiry = await axios.post(`${server}/orders/razorpay`, {
      ...props,
    });

    return new Promise((resolve, reject) => {
      return resolve(enquiry.data);
    });
  } catch (error) {
    console.log(error);
  }
  return;
};

export const stripeOrder = async (props) => {
  // console.log('******this is props from apiCalls**********: ', props);

  try {
    const enquiry = await axios.post(`${server}/orders/stripe`, {
      ...props,
    });

    return new Promise((resolve, reject) => {
      return resolve(enquiry.data);
    });
  } catch (error) {
    console.log(error);
  }
  return;
};

export const addPayment = async (props) => {
  // console.log('******this is props from apiCalls**********: ', props);

  try {
    const enquiry = await axios.post(`${server}/addpayment`, {
      ...props,
    });

    return new Promise((resolve, reject) => {
      return resolve(enquiry.data);
    });
  } catch (error) {
    console.log(error);
  }
  return;
};
