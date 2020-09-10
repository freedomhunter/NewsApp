import React from 'react';

import {Modal, Backdrop, Fade} from '@material-ui/core';
import { NewsContentCard } from './NewsContentCard';

export const NewsContent = ({toggle, data, setToggle}) => {
    return(
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="newsContentRoot"
        open={toggle}
        onClose={() => setToggle(!toggle)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={toggle}>
            <NewsContentCard data={data} />
        </Fade>
      </Modal>
    )
}