import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { isEmpty, map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Task Cards
import UncontrolledBoard from "./UncontrolledBoard"

import { getTasks } from "../../store/tasks/actions"
import withRouter from "../../components/Common/withRouter"
import { Col, Row } from "reactstrap"

const TasksKanban = (props) => {
  const { tasks, onGetTasks } = props

  useEffect(() => {
    onGetTasks()
  }, [onGetTasks])

  const data = map(tasks, task => ({ ...task, cards: task.tasks }))
  data.length = Math.min(data.length, 3)

  return (
    <React.Fragment>
      <div className="page-content">
        {/* Render Breadcrumbs */}
        <Breadcrumbs title="Tasks" breadcrumbItem="Kanban Board" />
        <Row>
          <Col>
            {!isEmpty(data) && (
              <UncontrolledBoard board={{ columns: data }} content={tasks} />
            )}
            </Col>
         </Row>
      </div>
    </React.Fragment>
  )
}

TasksKanban.propTypes = {
  tasks: PropTypes.array,
  onGetTasks: PropTypes.func,
}

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.tasks,
})

const mapDispatchToProps = dispatch => ({
  onGetTasks: () => dispatch(getTasks()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TasksKanban))
