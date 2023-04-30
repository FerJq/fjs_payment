import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          id={client.id}
          className={`flex-1 flex-center sm:min-w-[192px] min-w-[120px] cursor-pointer hover:brightness-200`}
        >
          <img
            src={client.logo}
            alt={client}
            className="sm:w-[192px] w-1[100px]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
