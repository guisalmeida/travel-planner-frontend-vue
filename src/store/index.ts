import { reactive } from 'vue'

export type Participant = {
  id?: string
  name?: string
  email?: string
  is_confirmed?: boolean
  is_owner?: boolean
  trip_id?: string
}

export type Link = {
  id: string
  title: string
  url: string
  trip_id: string
}

export type Activity = {
  id: string
  title: string
  occurs_at: string
  trip_id: string
}

export type Trip = {
  id: string
  participants: Participant[]
  destination: string
  ownerName: string
  ownerEmail: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
  links: Link[]
  activities: Activity[]
}

type StateProps = {
  currentTrip: Trip
}

const state = reactive<StateProps>({
  currentTrip: {
    id: '',
    participants: [],
    destination: '',
    ownerName: '',
    ownerEmail: '',
    starts_at: '',
    ends_at: '',
    is_confirmed: false,
    links: [],
    activities: []
  }
})

const mutations = {
  addParticipant(participant: Participant) {
    state.currentTrip.participants.push(participant)
  },
  removeParticipant(participantId: string) {
    state.currentTrip.participants = state.currentTrip.participants.filter(
      (participant) => participant.id !== participantId
    )
  },
  updateTrip(trip: Trip) {
    state.currentTrip = { ...state.currentTrip, ...trip }
  },
  setStartDate(newDate: string) {
    state.currentTrip.starts_at = newDate
  },
  setEndDate(newDate: string) {
    state.currentTrip.ends_at = newDate
  },
  addLink(link: Link) {
    state.currentTrip.links.push(link)
  },
  removeLink(linkId: string) {
    state.currentTrip.links = state.currentTrip.links.filter((link) => link.id !== linkId)
  },
  addActivity(activity: Activity) {
    state.currentTrip.activities.push(activity)
  },
  removeactivity(activityId: string) {
    state.currentTrip.activities = state.currentTrip.activities.filter(
      (activity) => activity.id !== activityId
    )
  }
}

const getters = {
  formatedDateRange() {
    if (!state.currentTrip.starts_at || !state.currentTrip.ends_at) {
      return 'Quando?'
    }

    const startDate = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date(state.currentTrip.starts_at))

    const endDate = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date(state.currentTrip.ends_at))

    return `${startDate} - ${endDate}`
  }
}

export default {
  state,
  mutations,
  getters
}
