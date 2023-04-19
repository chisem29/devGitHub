import React, { FC } from "react"

import { useQuery } from "react-query"
import { useNavigate, useSearchParams } from "react-router-dom"

import styles from "./Progress.module.sass"
import Actor, {actorOf} from "./Actor/Actor"

const Progress : FC = () => {

  const [queriesOf, searchOf] = useSearchParams()

  const {
    error,
    isLoading,
    data:actors,
  } = useQuery({
    queryKey : ["progress", "actors"],
    queryFn : () => require("../../data.json"),
    select : (data) : Array<actorOf> => (
      data?.slice(0, 32)?.sort((a : actorOf, b : actorOf) => (b.rating - a.rating))
    ),
    initialData : []
  })

  return ( 
    error ? 
    <h6>
      {(error as any).message}
    </h6> :
    isLoading ? 
    <h6>
      Loading...
    </h6> :
    <>
      {
        (!queriesOf.get("actor")) ?
          <>
            Actors : 
            <br /><br />
            <table 
              style={{ columnCount : 4, columnGap : "20px"}}
              className="table table-hover table-striped table-dark">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">age</th>
                  <th scope="col">raiting</th>
                </tr>
              </thead>
              <tbody>
                {
                  actors?.map(
                    ({ rating, age, name }, index) => 
                    <tr
                      onClick={() => {
                        searchOf({
                          actor : JSON.stringify({
                            rating,
                            age,
                            name
                          })
                        })
                      }}>
                      <th scope="row">{index+1}</th>
                      <td>{name}</td>
                      <td>{age}</td>
                      <td>{rating}</td>
                    </tr>
                  )
                }
              </tbody>
            </table> 
          </> :
          <>
            <Actor 
              {...JSON.parse(String(queriesOf.get("actor")))}
            />
          </>
      }
    </>
  )
}

export default Progress