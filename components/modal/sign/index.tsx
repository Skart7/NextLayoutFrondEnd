import React from 'react'
import dynamic from 'next/dynamic'

import styles from '../../../styles/modal/sign.module.sass'

import {Modal, IconButton, TabProvider, TabList, TabPanel, Input, Button} from '../../../customUI'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {setModalLogin, selectModal} from '../../../redux/slices/modal'

const CloseRoundedIcon = dynamic(() => import('@mui/icons-material/CloseRounded'))


function Sign () {

    const dispatch = useAppDispatch()
    const {login} = useAppSelector(selectModal)

    const [listArray] = React.useState([
        {value: "1", "label": "signIn"},
        {value: "2", "label": "signUp"}
    ])

    const onCloseSign = React.useCallback(() => {
        dispatch(setModalLogin(false))
    }, [])

    return (
    <Modal open={login} onClose={onCloseSign} className={styles.modal} animate="fade">

        <div className={styles.modalHeader}>
            <IconButton onClick={onCloseSign}><CloseRoundedIcon/></IconButton>
        </div>

        <div className={styles.modalWrapper}>
            <TabProvider>
                <TabList listArray={listArray} />
                <TabPanel value="1">
                    <div className={styles.modalForm}>
                        <Input variant="outlined" color="primary" label="Email" type="email" size="large" required fullWidth  />
                        <Input variant="outlined" color="primary" label="Password" type="password" size="large" required fullWidth />
                        <Button fullWidth variant="outlined">SignIn</Button>
                    </div>
                    <div className={styles.modalBottom}>
                        <Button fullWidth variant="contained" color="primary">Google</Button>
                        <Button fullWidth variant="contained" color="secondary">Facebook</Button>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <div className={styles.modalForm}>
                        <Input variant="outlined" color="primary" label="Email" size="large" type="email" required fullWidth />
                        <Input variant="outlined" color="primary" label="Password" size="large" type="password" required fullWidth />
                        <Button fullWidth variant="outlined">SignUp</Button>
                    </div>
                    <div className={styles.modalBottom}>
                        <Button fullWidth variant="contained" color="primary">Google</Button>
                        <Button fullWidth variant="contained" color="secondary">Facebook</Button>
                    </div>
                </TabPanel>
            </TabProvider>
        </div>

    </Modal>
    )
}

export default React.memo(Sign)