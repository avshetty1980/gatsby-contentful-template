import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
 {
  site {
    info:siteMetadata {
      title
      authour
      person {
        name
        age
      }
      data
      description
    }
    
  }
}
`

const Header = () => {
    const {
         site: {
             info: {
                 title,
                  person: {name}
                    }
                }
        } = useStaticQuery(getData);

    return (
        <div>
            {/* <h1> title: {data.site.info.title}</h1>
            <h1> name: {data.site.info.person.name}</h1> */}
            <h1>title: {title}</h1>
            <h1>name: {name}</h1>
        </div>
    );
}

export default Header;













// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const Header = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           authour
//           person {
//             name
//             age
//           }
//           data
//           description
//         }
//         port
//         host
//         id
//       }
//     }
//   `)
//   return (
//   <div>
//     <h2>{data.site.siteMetadata.person.name}</h2>
//     <h2>{data.site.siteMetadata.person.age}</h2>
//   </div>
//   );
// }

// export default Header;
