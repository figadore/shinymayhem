<div id="heading">
  <name id="name">Reese Anson Wilson</name>
  <hide-mail id="hidemail" prefix="rees" suffix="nsonwilson.com" title="Please don't add my email address to any lists"></hide-email>
</div>

## About me##

I&#39;m a self-motivated backend/devops-focused coder, trained as an engineer, with 8 years experience in the heavily regulated healthcare industry. I love staying up to date on the latest technologies, best practices and trends, especially in the areas of distributed architectures, automated everything, and scalability. I&#39;ve designed and developed multiple systems from the ground up.

I spent many years as the sole developer for my projects, but I thrive in collaborative environments, and am now supervising other developers. My current preferred language is Node.js, but I enjoy picking up new languages, and have recently been experimenting with Go.

I&#39;ve recently discovered the *community* aspect of open-source, and have since dived in, with everything from consuming vast quantities of podcasts to attending events, to using github to clean up or rewrite various open-source tools I use.


## Experience and Projects##

I&#39;ve been passionate about web development since I worked on my first project 8 years ago, on an electronic RMA system to replace our existing paper-based system. Since then, I&#39;ve designed and developed multiple systems from the ground up, including (but not limited to):

- Monitor reporting: Complete HIPAA compliant system for managing cardiac studies and patients. Integrates with EMRs for managing patients and facilities. Microservice based architecture using **hypermedia REST APIs** and **JSON schema**. Uses **Docker** containers for microservices. Deployed to AWS with **Kubernetes**. Logging and monitoring are done with the help of **Elasticsearch** and **Kibana**. Written mostly in **Node.js** and **Express**. **Drone CI** system for automated image building and **unit/integration tests** (using **mocha**, **karma**, **selenium** and **protractor**) (2015-present)
- Monitor processing: Low-level layer for managing the device side of cardiac studies. Processes incoming files from devices, runs them through an algorithm for additional arrhythmia detection. Written in PHP ( **ZF2**), stores files in **S3** through an abstracted key-value data store layer. Provides a **REST API** for third party developers. Unit tested with **PHPUnit**. Deployed to EC2 using Chef. Later **Dockerized** and deployed with **Kubernetes**. Also uses **jQuery** and **Bootstrap** (2014)
- Monitor device management: system for managing inventory of devices, including serialization, assignment to customers, wireless settings programming, and automated SMS sending to initiate device actions. Uses PHP (**ZF2**) and MySQL on the backend, **jQuery** and **SASS** on the frontend, deployed to **EC2** and **RDS** (2013)
- Heart Monitor: Wrote **HTTP** stack for an embedded system (**C++**) in a portable heart monitor, replacing existing FTP implementation and vastly improving potential for server-side capabilities. Also wrote the code for the UI, designed the label and menu graphics, and did the mechanical engineering and design for the enclosure (2011)
- CRM: Integrates with sales database and Google Apps to provide sales team with all the tools they need to manage their sales pipelines. Migrated data from pricey, bloated legacy CRM. Uses **CakePHP**, **Javascript** ( **jQuery** ) and **MySQL**, authenticates with **OpenID**, deployed on-premise with **Chef** (2010)
- Monitor interactions: Interacts with the portable heart monitor&#39;s HTTP stack to send and receive files during setup and operation. Uses PHP to perform low-level file parsing and composing, deployed to **AWS EC2** with **Chef**. Uses **Zend Framework**  (2012)
- DMS: Installed DMS from the market to migrate our paper document management to an electronic system. Wrote **PHP** plugins to customize the behavior to be compatible with regulatory document control requirements (2009)
- Sales database and commissions reports: Integrates with accounting system to inform our sales team about historical sales and their current commissions. **ASP.net** backend, uses complex **MySQL** queries and stored procedures extensively, works with Active Directory for integrated authentication on Windows (2008)

Side projects have also resulted in experience with graph databases (**neo4j**, **cypher**) and **Java** (**Android**).

## My Code
### NPM Modules##
#### [hypermedia-validator](https://www.npmjs.com/package/hypermedia-validator)

Validate JSON data against a schema or subschema

#### [more](https://www.npmjs.com/~shinymayhem)

### Github repos

#### [Express Skeleton](https://github.com/shinymayhem/express-skeleton-app)
Node.js server preconfigured for use as a REST API. Includes Drone CI config, bunyan logging, error handling, etc

### Docker images

#### [Node.js](https://hub.docker.com/r/shinydocker/node/)
Node.js server with some sane defaults and `onbuild` capabilities

#### [Protractor](https://hub.docker.com/r/shinydocker/protractor/)
Headless karma/protractor/selenium testing, great for CI builds

#### [JSON Schema Generator](https://hub.docker.com/r/shinydocker/schema-generator/)
PRMD schema generator. Convert .yaml schemas into prmd style json schemas for REST APIs

#### [more](https://hub.docker.com/r/shinydocker/)


## Meta
This site is a docker container running on digital ocean. It is a node.js server pulling markdown files based on the url and rendering with jade
