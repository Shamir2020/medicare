"use client"
import { useEffect, useState } from 'react'
import styles from './updateProfile.module.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const UpdateProfile = ()=>{

    const [profileId, setProfileId] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')
    const [contact, setContact] = useState('')
    const [address, setAddress] = useState('')
    const [eContact, setEContact] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')

    const router = useRouter()

    const FetchUserInfo = async ()=>{
        const response = await axios.get('/api/users/me')

        if (response.status == 200){
            const profile = response.data['profile']
            setBirthDate(profile['birthDate'])
            setGender(profile['gender'])
            setContact(profile['phone'])
            setAddress(profile['address'])
            setEContact(profile['eContact'])
            setBloodGroup(profile['bloodGroup'])
            console.log(profile['_id'])
            setProfileId(profile['_id'])

            console.log('Profile ', profileId)
        }
    }

    const SubmitForm = async (e)=>{
        e.preventDefault()

        const response = await axios.post('/api/users/updateProfile', {
            profile: profileId,
            birthDate: birthDate,
            gender: gender,
            contact: contact,
            address: address,
            eContact: eContact,
            bloodGroup: bloodGroup
        })

        if (response.status == 200){
            toast.success('Profile Updated !')
            router.push('/profile')
        }
        else {
            toast.error('Profile was not updated !')
        }
    }

    useEffect(()=>{
        FetchUserInfo()
    },[])

    return (
        <div className={styles.updateProfile}>
            <h5>Update Profile</h5>
            <form action="">
                <div>
                <div className={styles.col1}>
                    <label htmlFor="birthDate">Date of Birth</label>
                    <input type="date" name='birthDate' value={birthDate} onChange={(e)=>setBirthDate(e.target.value)}/>
                    <label htmlFor="gender">Gender</label>
                    <select value={gender} onChange={(e)=>setGender(e.target.value)} name="gender" id="">
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="phone">Contact</label>
                    <input type="number" value={contact} onChange={(e)=>setContact(e.target.value)} name='phone' autoComplete='off' placeholder='Your phone number'/>

                    <label htmlFor="address">Address</label>
                    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} name='address' autoComplete='off' placeholder='Your address'/>

                </div>
                <div className={styles.col2}>
                    <label htmlFor="eContact">Emergency Contact</label>
                    <input type="number" value={eContact} onChange={(e)=>setEContact(e.target.value)} name='econtact' placeholder='Your emergency contact'/>

                    <label htmlFor="bloodGroup">Blood Group</label>
                    <select name="bloodgroup" value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)} id="">
                        <option value="">Select your blood group</option>
                        <option value="A+">A RhD positive (A+)</option>
                        <option value="A-">A RhD negative (A-)</option>
                        <option value="B+">B RhD positive (B+)</option>
                        <option value="B-">B RhD negative (B-)</option>

                        <option value="O+">O RhD positive (O+)</option>
                        <option value="O-">O RhD negative (O-)</option>
                        <option value="AB+">AB RhD positive (AB+)</option>
                        <option value="AB-">AB RhD negative (AB-)</option>

                    </select>



                </div>
                </div>

                <button onClick={SubmitForm}>Submit Profile</button>
            </form>
        </div>
    )
}


export default UpdateProfile