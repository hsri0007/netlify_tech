import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PinDropIcon from "@material-ui/icons/PinDrop";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  section: {
    padding: "10px 0px",
  },

  mainhead: {
    fontSize: "28px",
    margin: "15px 0px",
  },

  icon: {
    marginBottom: "-4px",
    marginRight: "5px",
    color: "#959fb2",
  },

  detail: {
    fontSize: "14px",
    color: "#212121",
  },

  line: {
    border:"none",
    margin: "0px",
    border: "2px solid #ffcf00",
    width: "10%",
  },
}));

const BlogContent = ({ blog }) => {
  const classes = useStyles();
  return (
    <div>
      <section className={classes.section}>
        <Container maxWidth="md">
          <div className="tabcard" dangerouslySetInnerHTML={{ __html: blog.description }} />
          {/* <p>
            Snowflake and Databricks have arisen as significantly upgraded
            alternatives to the outdated EDW 1.0 and Data Lake 1.0. They utilize
            new cloud services to aid users in turning a greater proportion of
            data into usable information. They deliver quicker performance at a
            cheaper cost because of the price elasticity of the cloud. Snowflake
            and Databricks, with their recent cloud relaunch, best reflect the
            two major ideological data digesting groups we've seen previously.
            Snowflake offers a cloud-only EDW 2.0. Meanwhile, Databricks offers
            a hybrid on-premises-cloud open-source Data Lake 2.0 strategy. In
            this blog, we will explore all the aspects of Snowflake vs
            Databrick, which help you choose the best among the two. Snowflake
            vs Databricks - Learn the Key Differences In this Snowflake vs
            Databricks article, we will talk about: 👉 What is Snowflake? 👉
            What are Databricks? 👉 Advantages of Snowflake? 👉 Advantages of
            Databricks? 👉 Key Difference between Snowflake & Databricks What is
            Snowflake? Snowflake provides solutions for data retention,
            computing, and analysis that are significantly quicker, simpler to
            use, and more versatile than previous options. Snowflake is not
            based on current database technologies or “big data” software
            applications such as Hadoop. Rather than that, Snowflake blends an
            entirely new SQL query technology with a unique cloud
            infrastructure. What are Databricks? Databricks is a market-leading
            cloud-based test automation platform for processing and converting
            huge amounts of data, as well as analyzing the data using machine
            learning algorithms. Behind the doors, this Apache-Spark-based
            platform is a decentralized network, which means that the load is
            dynamically spread over several cores and adjusts up and down
            depending on demand. Advantages of Snowflake 1. Facilitation of
            implementation - The architecture of Snowflake is both adaptable and
            efficient. Additionally, it is often regarded as one of the most
            approachable data warehouses for data migration. Furthermore,
            because Snowflake is a cloud-based data platform, no complex
            equipment or IT architecture is required to set up or administer. 2.
            Initialization of the cloud - Snowflake's structure is designed from
            the bottom up for cloud computing. A Snowflake database server is
            excellent for cross-cloud workloads and multi-cloud platforms
            because of its cloud-first strategy. Snowflake is also accessible on
            Amazon Web Services and Microsoft Azure. 3. Performance - Because
            Snowflake is built on contemporary cloud architecture, it avoids
            many of the challenges associated with conventional data warehouses,
            resulting in enhanced performance overall. Snowflake enables
            near-infinite scalability through the isolation of simultaneous
            workloads on dedicated resources. This implies that every
            individual, group, program, or automated job may operate
            independently of the rest of the system without impairing overall
            system performance. 4. Administration is not necessary - That is
            correct. Snowflake is completely cloud-based, requiring no IT
            infrastructure or management. It has built-in speed optimization,
            data security, and safe data exchange, and ensures that datasets of
            any size have rapid access and recovery. Advantages of Databricks 1.
            Languages and surroundings are familiar - Although Databricks is
            Spark-based, it also supports popular programming languages such as
            Python, R, and SQL. These technologies are translated on the backend
            using APIs to allow them to communicate with Spark. This eliminates
            the need for users to learn additional computer languages for
            networked analytics. 2. Easily integrates with Microsoft stack -
            Databricks is secured through the Azure Active Directory
            architecture. Current credentials authorization can be used, if the
            appropriate security settings are in place. Access and identity
            management are handled in the same context. By utilizing Azure
            Active Directory, connectivity with the full Azure stack, including
            Data Lake Storage, is made simple. 3. Numerous data sources - Apart
            from the Azure-based sources described above, Databricks links to a
            variety of other resources, such as on SQL servers, CSV files, and
            JSON files. 4. Appropriate for little projects as well - Despite
            Databricks being well-suited for large-scale operations, it may also
            be utilized for smaller projects and improvement. This enables the
            usage of Databricks as a one-stop solution for any analytics tasks.
            Companies no longer have to build distinct development environments
            or virtual machines. Key Differences: Snowflake vs Databricks
            #Structure of data Snowflake: With the exception of EDW 1.0 and
            comparable to a cloud environment, Snowflake enables you to load and
            store organized and semi-structured files directly into the EDW
            before even organizing the data with an ETL application. Once the
            data is submitted, Snowflake will immediately turn it into its
            internal organized format. Databricks: As Data Lake 1.0, Databricks
            supports all types of data in their native format. Indeed,
            Databricks may be utilized as an ETL tool to arrange complex data so
            that it could be used by various other tools. #Versatility
            Snowflake: It excels in SQL-based data analysis application cases.
            Dealing with Snowflake information on scientific computing use cases
            almost definitely requires dependency on their provider network.
            Databricks: It also supports high-performance SQL queries for Data
            Analysis use cases. Databricks created open-source Delta Lake to
            offer another degree of reliability to Data Lake 1.0. Utilizing
            Databricks Delta Processor on the base of Delta Lake, users may now
            execute SQL queries at the high rates reserved solely for Database
            queries to an EDW. #Features Snowflake: It has a repository and
            security capabilities, as well as great support, safety validations,
            and interconnections, among other things. Databricks: Interaction,
            dynamic exploration, the Databricks engine, task scheduling,
            analytics dashboard, audits, and notebook processes are all
            included. #Pricing Snowflake: It provides customers with four
            enterprise-level perspectives. There are four editions: basic,
            premium, professional, and enterprise for confidential documents.
            Databricks: It offers three business price tiers to its subscribers:
            those for data science workloads, those for business intelligence
            workloads, and those for corporate plans. Conclusion With Snowflake,
            you may work on SQL data in a variety of languages. This is
            especially essential for applications involving advanced analytics
            and data science. Data scientists primarily utilize R and Python to
            handle large data. Databricks provides a platform for integrated
            data science and advanced analysis, as well as secure connectivity
            for these domains.
          </p> */}
        </Container>
      </section>
    </div>
  );
};

export default BlogContent;
