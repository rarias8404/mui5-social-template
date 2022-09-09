import React from 'react'
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material'

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
})

const Share = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardContent>
        <UserBox>
          <Avatar
            alt="John Doe"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Typography fontWeight={500} variant="span">
            John Doe
          </Typography>
        </UserBox>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={2}
          placeholder="What's on your mind"
          variant="standard"
          fullWidth
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotions color="primary" />
          <Image color="secondary" />
          <VideoCameraBack color="success" />
          <PersonAdd color="error" />
        </Stack>
        <ButtonGroup
          fullWidth
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>Post</Button>
          <Button sx={{ width: '100px' }}>
            <DateRange />
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  )
}

export default Share
