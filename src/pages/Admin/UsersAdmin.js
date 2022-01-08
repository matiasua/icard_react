import React, { useState, useEffect } from 'react'
import { Loader } from 'semantic-ui-react';
import { HeaderPage, TableUsers, AddEditUserForm }  from '../../components/Admin'
import {  ModalBasic } from '../../components/Common'
import { useUser } from '../../hooks'

export function UsersAdmin() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [ContentModal, setContentModal] = useState(null)
  const [refetch, setRefetch] = useState(false)
  const {loading, users, getUsers} = useUser();

  useEffect(() => getUsers(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addUser = () => {
    setTitleModal('Nuevo usuario');
    setContentModal(<AddEditUserForm onClose={openCloseModal}  onRefetch={onRefetch}/>);
    openCloseModal();
  }

  const updateUser = (data) => {
    setTitleModal('Editar usuario');
    setContentModal(<AddEditUserForm onClose={openCloseModal}  onRefetch={onRefetch} user={data}/>);
    openCloseModal();
  }


  return (
    <div>
      <HeaderPage title = 'Usuarios' btnTitle='Nuevo usuario' btnClick={addUser}/>
      {loading ? (
        <Loader active inline='centered'>
          Cargando...
        </Loader>
      ) : (
        <TableUsers users={users} updateUser={updateUser}/>
      )}

      <ModalBasic show={showModal} onClose={openCloseModal} title={titleModal} children={ContentModal}/>
    </div>
  )
}
